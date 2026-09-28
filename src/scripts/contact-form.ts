const form = document.querySelector<HTMLFormElement>('#contact-form');

if (form) {
  const button = form.querySelector<HTMLButtonElement>(
    'button[type="submit"]',
  )!;
  const label = form.querySelector<HTMLElement>('[data-submit-label]')!;
  const status = form.querySelector<HTMLElement>('#contact-status')!;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled || !form.reportValidity()) return;

    if (form.dataset.configured !== 'true') {
      status.textContent =
        'The contact form isn’t available yet. Please try again later.';
      return;
    }

    const data = new FormData(form);
    if (data.get('botcheck')) return;

    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    label.textContent = 'Sending…';
    status.textContent = '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(data)),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true)
        throw new Error('Submission failed');

      form.reset();
      status.textContent =
        'Thank you for reaching out. Your message has been sent to Zinduka Hub.';
    } catch {
      status.textContent =
        'We couldn’t confirm your message was sent. Your details are still here — please try again.';
    } finally {
      button.disabled = false;
      form.removeAttribute('aria-busy');
      label.textContent = 'Send message';
    }
  });
}

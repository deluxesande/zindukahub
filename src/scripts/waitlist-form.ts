// Cohort waitlist signups only, posting under the waitlist's own access key.
const form = document.querySelector<HTMLFormElement>('#waitlist-form');

if (form) {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const label = form.querySelector<HTMLElement>('[data-submit-label]')!;
  const status = form.querySelector<HTMLElement>('#waitlist-status')!;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled || !form.reportValidity()) return;

    const data = new FormData(form);
    if (data.get('botcheck')) return;

    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    label.textContent = 'Adding you…';
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
        'You are on the list. We will email you when applications open.';
    } catch {
      status.textContent =
        'We couldn’t add you just now. Your email is still here, please try again.';
    } finally {
      button.disabled = false;
      form.removeAttribute('aria-busy');
      label.textContent = 'Send';
    }
  });
}

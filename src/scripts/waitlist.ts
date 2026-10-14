// The panel is `hidden` until opened so the collapsed form stays out of the
// tab order; the data-open attribute drives the slide-in transition.
for (const root of document.querySelectorAll<HTMLElement>('[data-waitlist]')) {
  const toggle = root.querySelector<HTMLButtonElement>('[data-waitlist-toggle]');
  const panel = root.querySelector<HTMLElement>('[data-waitlist-panel]');
  const email = root.querySelector<HTMLInputElement>('input[type="email"]');
  const cancel = root.querySelector<HTMLButtonElement>('[data-waitlist-cancel]');
  if (!toggle || !panel) continue;

  const close = () => {
    panel.removeAttribute('data-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.hidden = false;
    toggle.focus({ preventScroll: true });
    panel.addEventListener(
      'transitionend',
      () => {
        if (!panel.hasAttribute('data-open')) panel.hidden = true;
      },
      { once: true },
    );
  };

  toggle.addEventListener('click', () => {
    panel.hidden = false;
    // Next frame, so the transition runs from the collapsed state.
    requestAnimationFrame(() => {
      panel.setAttribute('data-open', '');
      toggle.setAttribute('aria-expanded', 'true');
      // The prompt is answered once the form is open, so the button steps out.
      toggle.hidden = true;
      email?.focus({ preventScroll: true });
    });
  });

  cancel?.addEventListener('click', close);
}

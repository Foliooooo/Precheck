export function PreCheckMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="18" fill="#5C5CFF" />
      <path d="M18 33.5 28 43l18-21" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="wordmark" aria-label="PreCheck">
      <PreCheckMark />
      <span aria-hidden="true">precheck</span>
    </span>
  );
}

export function FoliooMark({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M5 10a7 7 0 0 1 7-7h15v7H13a1 1 0 0 0-1 1v4h10l-5 7h-5v7H5z" fill="#5C5CFF" />
      <path d="M23 25h4v4h-4z" fill="#5C5CFF" />
    </svg>
  );
}

export function PoweredByFolioo() {
  return (
    <a className="powered" href="https://folioo.tech" aria-label="Powered by Folioo">
      <span>Powered by</span>
      <FoliooMark />
      <strong>folioo</strong>
    </a>
  );
}

export function AndroidIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.6 9.48 19.44 6.3a.38.38 0 0 0-.66-.38l-1.86 3.22a11.5 11.5 0 0 0-9.84 0L5.22 5.92a.38.38 0 0 0-.66.38L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52ZM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
      />
    </svg>
  );
}

export function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79a4.43 4.43 0 0 0-3.74 2.28c-1.6 2.77-.41 6.87 1.15 9.12.76 1.1 1.67 2.33 2.86 2.29 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.24-.02 2.02-1.12 2.77-2.22a9.8 9.8 0 0 0 1.26-2.58 3.98 3.98 0 0 1-2.42-3.65ZM14.1 5.86A3.98 3.98 0 0 0 15.04 3a4.06 4.06 0 0 0-2.62 1.36 3.8 3.8 0 0 0-.97 2.77 3.36 3.36 0 0 0 2.65-1.27Z"
      />
    </svg>
  );
}

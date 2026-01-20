'use client';

import Turnstile, { useTurnstile } from "react-turnstile";

export default function TurnstileWidget() {
  return (
    <Turnstile 
      sitekey={'0x4AAAAAAA5FyHhcY8lrYZcG'}
      className="cf-turnstile"
    />
  );
}

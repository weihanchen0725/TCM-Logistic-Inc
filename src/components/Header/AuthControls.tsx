'use client';

import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { ChevronDown } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import headerClass from './Header.module.scss';
import ctaClass from '../CTABar/CTABar.module.scss';

const AuthControls = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownId = useId();
  const authRef = useRef<HTMLDivElement>(null);
  const translateHeader = useTranslations('Header');

  useEffect(() => {
    if (!isOpen) return;

    const closeDropdown = (event: MouseEvent) => {
      if (!authRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', closeDropdown);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('mousedown', closeDropdown);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div ref={authRef} className={headerClass.headerAuth}>
      <Show when="signed-out">
        <button
          type="button"
          className={`${ctaClass.ctaBarButton} ${ctaClass.ctaBarButtonSecondary} ${headerClass.headerAuthTrigger}`}
          aria-expanded={isOpen}
          aria-controls={dropdownId}
          onClick={() => setIsOpen((open) => !open)}
        >
          {translateHeader('sign_in_or_sign_up')}
          <ChevronDown aria-hidden="true" size={16} className={isOpen ? headerClass.open : ''} />
        </button>
        {isOpen ? (
          <div
            id={dropdownId}
            className={headerClass.headerAuthDropdown}
            role="group"
            aria-label={translateHeader('auth_options')}
          >
            <SignInButton mode="modal">
              <button
                type="button"
                className={`${ctaClass.ctaBarButton} ${ctaClass.ctaBarButtonPrimary}`}
                onClick={() => setIsOpen(false)}
              >
                {translateHeader('sign_in')}
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button
                type="button"
                className={`${ctaClass.ctaBarButton} ${ctaClass.ctaBarButtonSecondary}`}
                onClick={() => setIsOpen(false)}
              >
                {translateHeader('sign_up')}
              </button>
            </SignUpButton>
          </div>
        ) : null}
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
};

export default AuthControls;

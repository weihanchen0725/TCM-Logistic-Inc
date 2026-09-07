'use client';

import React from 'react';
import ctaClass from './CTABar.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import ctaBarData from '@/assets/data/CTABar.data.json';
import type { LinkProps } from '@/types/LinkProps';

interface CTAProps {
  styleMode?: 'row' | 'column';
  ctaLinks?: LinkProps[];
  startIndex?: number;
  endIndex?: number;
}

const CTABar = ({ styleMode = 'row', ctaLinks: ctaLinksProp, startIndex, endIndex }: CTAProps) => {
  const translateCTABar = useTranslations('CTABar');
  const pathname = usePathname();
  const locale = useLocale();
  // Prefer prop data (from CMS via Header); fall back to local CTABar.data.json.
  const ctaLinks: LinkProps[] = (ctaLinksProp ?? ctaBarData) as LinkProps[];
  const isHomePage = pathname === `/${locale}` || pathname === '/';
  const getHref = (cta: LinkProps) => {
    const resolved = cta.Value ?? '#';

    if (cta.isExternal || isHomePage || !resolved.startsWith('#')) {
      return resolved;
    }

    return `/${locale}${resolved}`;
  };

  const renderLinks = () => {
    const activeLinks = ctaLinks?.filter((cta: LinkProps) => cta?.isActive) ?? [];
    const offset = startIndex ?? 0;

    return activeLinks.slice(offset, endIndex ?? activeLinks.length).map((cta, index) => {
      // Primary treatment follows the link's position in the full list, not the slice.
      const isPrimary = offset + index === 0;

      return (
        <li key={`cta-item-${cta?.id || offset + index}`}>
          <a
            className={`${ctaClass.ctaBarButton} ${isPrimary ? ctaClass.ctaBarButtonPrimary : ctaClass.ctaBarButtonSecondary}`}
            href={getHref(cta)}
            aria-disabled={cta?.isEnabled === false}
            target={cta?.isExternal ? '_blank' : '_self'}
            rel={cta?.isExternal ? 'noopener noreferrer' : undefined}
          >
            {translateCTABar(cta?.Key?.toLowerCase() ?? '')}
          </a>
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      {styleMode === 'row' ? (
        <div className={ctaClass.ctaBar}>
          <ul className={ctaClass.ctaBarList}>{renderLinks()}</ul>
        </div>
      ) : (
        <div className={ctaClass.ctaBar}>
          <ul className={`${ctaClass.ctaBarList} ${ctaClass.ctaBarListColumn}`}>{renderLinks()}</ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default CTABar;

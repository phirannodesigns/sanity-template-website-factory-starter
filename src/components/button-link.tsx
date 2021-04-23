import { Link } from 'gatsby';
import * as React from 'react';

import { classNames } from '../utils/classnames';

interface IStyles {
  isBlock: boolean;
  isLarge: boolean;
  style: 'is-primary' | 'is-outline';
}

interface IPageButton {
  isButton: boolean;
  page: {
    title: string;
    slug: {
      current: string;
    };
  };
  styles: IStyles;
  title: string;
  url: null;
}

interface IURLButton {
  isButton: boolean;
  page: null;
  styles: IStyles;
  title: string;
  url: string;
}

type IButtonLink = IPageButton | IURLButton;

interface ButtonLinkProps {
  link: IPageButton | IURLButton;
}

function ButtonLink({ link }: ButtonLinkProps): React.ReactElement {
  const buttonStyles =
    'inline-block border-2 border-primary uppercase font-semibold tracking-wider';
  const primaryStyles = 'text-type bg-primary';
  const outlineStyles = 'text-primary bg-transparent';
  const largeStyles = 'px-6 py-2 text-base';
  const smallStyles = 'px-4 py-1 text-sm';
  const styles = classNames(
    link.isButton && buttonStyles,
    link.styles.style === 'is-primary' && primaryStyles,
    link.styles.style === 'is-outline' && outlineStyles,
    link.styles.isLarge ? largeStyles : smallStyles
  );

  if (link.page) {
    return (
      <Link to={link.page.slug.current} className={styles}>
        {link.page?.title}
      </Link>
    );
  }

  return (
    <a href={link.url} className={styles}>
      {link.title}
    </a>
  );
}

export { ButtonLink };
export type { IButtonLink, IPageButton, IStyles, IURLButton };

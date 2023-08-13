type WrapperTag = 'div' | 'section' | 'header' | 'footer' | 'aside' | 'nav';
type TextTag = 'p' | 'li' | 'span';
type HeadlineTag = 'h1' | 'h2' | 'h3' | 'h4';
type TypographyTags = TextTag | HeadlineTag;

type Variant = 'sm' | 'md' | 'lg';

type Theme = 'light' | 'dark';

export { TextTag, HeadlineTag, TypographyTags, WrapperTag, Variant, Theme };

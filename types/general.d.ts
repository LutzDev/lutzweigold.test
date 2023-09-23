type WrapperTag = 'div' | 'section' | 'header' | 'footer' | 'aside' | 'nav';
type TextTag = 'p' | 'li' | 'span' | 'div';
type HeadlineTag = 'h1' | 'h2' | 'h3' | 'h4';
type TypographyTags = TextTag | HeadlineTag;

type Variant = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Theme = 'light' | 'dark';

export { TextTag, HeadlineTag, TypographyTags, WrapperTag, Variant, Theme };

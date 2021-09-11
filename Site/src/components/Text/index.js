import { useState, useEffect } from 'react';

/* utils */
import { isMobile, screenWidth } from 'utils/device';

const Text = (props) => {

  /* parsed props */
  const {
    children,
    fontSize,
    fontFamily,
    textAlign,
    color,
    nowrap,
    spacing,
    onClick,
    animation,
    animationDelay,
    id_reference,
    className,
    reference,
    innerHTML
  } = props;

  const style = Object.assign({
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    fontSize: (fontSize * (isMobile() ? 0.8 : screenWidth() < 1024 ? 0.9 : 1))+'rem',
    textAlign: textAlign,
    color: color,
    maxWidth: '100%',
    wordBreak: 'break-word'
  }, props.style);

  if( onClick != null ) {
    style['cursor'] = 'pointer';
  }
  if( nowrap == true ) {
    style['whiteSpace'] = 'nowrap';
  }
  if( spacing ) {
    style['letterSpacing'] = spacing+'rem'
  }

  /* ui */
  return (
    <span id={id_reference} ref={reference} style={style} className={className} onClick={onClick} data-aos={animation} data-aos-delay={animationDelay} dangerouslySetInnerHTML={innerHTML ? { __html: `<span>${innerHTML}</span>` } : null}>{children}</span>
  );

}

Text.defaultProps = {
  fontSize: 1,
  textAlign: 'left',
  color: '#3a3e44',
  uppercase: false
}

export default Text;

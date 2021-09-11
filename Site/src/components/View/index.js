const View = (props) => {

  const {
    hidden,
    backgroundImage,
    animation,
    animationDelay,
    onClick,
    onMouseMove,
    onWheel,
    reference,
    id_reference,
    onscroll_reference
  } = props;

  if( hidden ) {
    return null;
  }

  const style = Object.assign({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    boxSizing: 'border-box',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom'
  }, props.style);

  if( backgroundImage ) {
    style['backgroundImage'] = 'url('+backgroundImage+')';
  }
  if( onClick != null ) {
    style['cursor'] = 'pointer';
  }

  /* ui */
  return (
    <div className={props.className} style={style} onWheel={onWheel} onMouseMove={onMouseMove} onClick={onClick} ref={reference} id={id_reference} onScroll={onscroll_reference} data-aos={animation} data-aos-delay={animationDelay}>
      {props.children}
    </div>
  );

}

View.defaultProps = {
  hidden: false
}

export default View;

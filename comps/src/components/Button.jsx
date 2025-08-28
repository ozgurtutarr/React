import PropTypes from 'prop-types';
import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(rest.className, 'flex items-center px-3 py-1.5', {
    'border border-blue-600 bg-blue-500 text-white': primary,
    'border border-gray-600 bg-gray-500 text-white': secondary,
    'border border-green-600 bg-green-500 text-white': success,
    'border border-yellow-600 bg-yellow-500 text-white': warning,
    'border border-red-600 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-black': outline,
    'text-blue-600': outline && primary,
    'text-gray-600': outline && secondary,
    'text-green-600': outline && success,
    'text-yellow-600': outline && warning,
    'text-red-600': outline && danger,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,

  // Özel doğrulayıcı
  variationCheck: (props, propName, componentName) => {
    const { primary, secondary, success, warning, danger } = props;
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        `Invalid props supplied to ${componentName}. Only one of primary, secondary, success, warning, or danger can be true.`
      );
    }
  },
};

export default Button;

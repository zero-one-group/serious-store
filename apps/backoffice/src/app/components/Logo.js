import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
import { ReactComponent as imageLogo } from '../../assets/image/logo.svg';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component={imageLogo} sx={{ width: 40, height: 40, ...sx }} />;
}

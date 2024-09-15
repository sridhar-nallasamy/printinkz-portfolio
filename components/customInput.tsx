'use client';

import { FormHelperText, Grid, InputAdornment, TextField } from '@mui/material';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { CustomInputProps } from '@/types/components';
import CustomToolTip from './customToolTip';

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  name,
  label,
  value,
  handleChange,
  handleBlur,
  error,
  helperText,
  inputProp,
  info,
}) => {
  return (
    <Grid container className="px-3 flex justify-end items-center">
      <Grid container spacing={2} className="px-3 items-center my-1">
        {label && (
          <Grid
            component="label"
            xs={6}
            sm={6}
            md={9}
            className={`text-gray-500 font-bold mb-1 md:mb-0 px-4 flex justify-start`}
          >
            {label}
            {info && (
              <CustomToolTip title={info}>
                <InfoRoundedIcon />
              </CustomToolTip>
            )}
          </Grid>
        )}
        <Grid xs={6} sm={6} md={3}>
          <TextField
            fullWidth
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error}
            margin="normal"
            size="small"
            InputProps={{
              ...(inputProp === '%'
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        {inputProp}
                      </InputAdornment>
                    ),
                  }
                : {
                    startAdornment: (
                      <InputAdornment position="start">
                        {inputProp}
                      </InputAdornment>
                    ),
                  }),
            }}
          />
        </Grid>
      </Grid>
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </Grid>
  );
};

export default CustomInput;
//export default forwardRef(CustomInput);

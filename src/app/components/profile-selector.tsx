import * as Mui from "@mui/material";
import * as Formik from "formik";
import * as React from "react";

const toBase64 = (file: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const Profiler = ({
  name,
  src,
  error,
  width,
  sx,
  ...props
}: profiler.Props & Mui.AvatarProps) => {
  const formikHelpers = Formik.useFormikContext();
  const handleOnChange = async (e: React.FormEvent<HTMLInputElement>) =>
    formikHelpers.setFieldValue(
      name,
      await toBase64((e.target as unknown as { files: Blob[] })?.files[0])
    );

  return (
    <Mui.Box sx={{ width }}>
      <input
        hidden
        accept="image/*"
        id="browse"
        type="file"
        name={name}
        onChange={handleOnChange}
      />
      <label
        htmlFor="browse"
        style={{ display: "inline-block", width: "inherit" }}
      >
        <Mui.Avatar
          src={src}
          variant="square"
          {...props}
          sx={{
            height: 100,
            width: 100,
            border: error && "1px solid red",
            ...sx,
          }}
        />
      </label>
      {error && (
        <Mui.Typography color="error" variant="caption">
          {error}
        </Mui.Typography>
      )}
    </Mui.Box>
  );
};

export declare namespace profiler {
  export interface Props {
    name: string;
    src: string;
    width?: string;
    error?: string;
  }
}

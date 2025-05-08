import type { AnyFieldApi } from "@tanstack/react-form";

export default function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <p className="text-[0.8rem] font-medium text-red-600">
          {field.state.meta.errors.map((err) => err.message).join(",")}
        </p>
      ) : null}
    </>
  );
}

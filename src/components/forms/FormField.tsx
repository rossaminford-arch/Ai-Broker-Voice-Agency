import { ReactElement } from "react";
import { Controller, Control, FieldValues, Path, ControllerRenderProps } from "react-hook-form";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  description?: string;
  render: (field: ControllerRenderProps<T, Path<T>>) => ReactElement;
  error?: string;
}

export function FormField<T extends FieldValues>({ control, name, label, description, render, error }: Props<T>) {
  return (
    <div className="space-y-2">
      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor={name}>
          {label}
        </label>
        {description ? <p className="text-xs text-slate-500">{description}</p> : null}
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => render(field)}
      />
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  );
}

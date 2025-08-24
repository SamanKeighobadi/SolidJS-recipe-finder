import { For } from "solid-js";

type SelectOption = {
  value: string | number;
  label: string | number;
};

type SelectProps = {
  title: string;
  label: string;
  placeholder: string;
  options: SelectOption[];
  onChange: (e: string) => void;
  value: string | number;
};

const Select = (props: SelectProps) => {
  return (
    <fieldset class="fieldset">
      <legend class="fieldset-legend">{props.label}</legend>
      <select
        class="select"
        title={props.title}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        value={props.value}
      >
        <option disabled selected>
          {props.placeholder}
        </option>

        {props.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </fieldset>
  );
};

export default Select;

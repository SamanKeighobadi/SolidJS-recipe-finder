import { For } from "solid-js";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  title: string;
  label:string;
  options: SelectOption[];
};

const Select = (props: SelectProps) => {
  return (
    <fieldset class="fieldset">
      <legend class="fieldset-legend">{props.label}</legend>
      <select class="select" title={props.title}>
        {/* <option disabled selected>
        Pick a color
      </option> */}

        {props.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </fieldset>
  );
};

export default Select;

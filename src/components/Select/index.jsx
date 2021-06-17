import { SelectStyles, Option } from './styles.js'

const Select = ({ register, options, name, ...rest}) => {
  return (
    <SelectStyles {...register(name)} {...rest}>
      {options.map(element => (
        <Option key={element} value={element}>
          {element}
        </Option>
      ))}
    </SelectStyles>
  )
};

export default Select;
import { useToggle } from '../../../hooks/useToggle';

export function InputPhoneArea({ onChange, id, name, value, language }) {

	const [isExpanded, toggleExpand] = useToggle(false)

	const options = {
		"32": "+32 🇧🇪",
		"33": "+33 🇫🇷",
	};


	return (
		<select
			className="form-select phone-area__input"
			id={id}
			name={name}
			value={value}
			onChange={onChange}
			onFocus={() => toggleExpand(true)}
			onBlur={() => toggleExpand(false)}
		>
			{Object.entries(options).map(([value, text]) => (
				<option key={value} value={value}>
					{isExpanded ? text : '+' + value}
				</option>
			))}
		</select>
	);
}



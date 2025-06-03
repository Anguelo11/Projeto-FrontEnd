
const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h4 style={{ fontSize: '14px', color: '#474747', marginBottom: '10px'}}>{title}</h4>
      {options.map((option, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <input
            type={inputType}
            name={title}
            value={option.value || option.text}
            style={{
              width: '22px',
              height: '22px',
              accentColor: '#C92071', 
              marginRight: '8px',
            }}
          />
          <label>{option.text}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterGroup;

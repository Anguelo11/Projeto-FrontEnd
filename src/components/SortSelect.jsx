const SortSelect = ({ onSortChange }) => {
  return (
    <div style={{ width: '308px', height: '60px', marginBottom: '16px' }}>
      <label
        htmlFor="sort"
        style={{
          display: 'block',
          color: '#474747', 
          fontSize: '16px',
          marginBottom: '8px'
        }}
      >
        Ordenar por
      </label>

      <select
        id="sort"
        onChange={(e) => onSortChange(e.target.value)}
        style={{
          width: '100%',
          height: '36px',
          fontSize: '14px',
          color: '#474747',
          padding: '4px'
        }}
      >
        <option value="low">Menor preço</option>
        <option value="high">Maior preço</option>
      </select>
    </div>
  );
};

export default SortSelect;

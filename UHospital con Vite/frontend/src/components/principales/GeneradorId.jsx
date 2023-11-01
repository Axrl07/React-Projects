function GeneradorId({ id, setid }) {
    const generarId = (length = 36) => {
      let result = '';
      const characters = 'abcdef0123456789';
  
      for (let i = 0; i < length; i++) {
        if (result.length === 8 || result.length === 13 || result.length === 18 || result.length === 23) {
          result += '-';
        }
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        if (result.length === 36) {
          return result;
        }
      }
    }
  
    const handleGenerarId = () => {
      const nuevoId = generarId();
      setid(nuevoId);
    };
  
    return (
      <div className="input-group mb-3">
        <span className="input-group-text"> ID </span>
        <input type="text" className="form-control" value={id} placeholder={id} name="id" readOnly />
        <button type="button" className="btn btn-primary" onClick={handleGenerarId}>Generar un ID</button>
      </div>
    );
  }
  
  export default GeneradorId;
import './App.css';
import { useState } from 'react';

function App() {
  const [toasts, setToasts] = useState([]);
  const [cnt, setCnt] = useState(0);

  function closeHandler(id){
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }

  function toastHandler(e) {
    const message = e.target.dataset.message;
    const name = e.target.name;
  
    const id = cnt;
    const newToast = { id, message ,name };
    setToasts(prev => [...prev, newToast]); 
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 2000);

    setCnt(prev => prev + 1);
  }

  return (
    <div>
        <div className='toast-buttons'>
          <button onClick={toastHandler} name='success' data-message='Success !!'>Success Toast</button>
          <button onClick={toastHandler} name='warn' data-message='Warn !!'>Warning Toast</button>
          <button onClick={toastHandler} name='info' data-message='Info !!'>Info Toast</button>
          <button onClick={toastHandler} name='error' data-message='Error !!'>Error Toast</button>
        </div>

        <div className="toast-container">
          {
            toasts.map(toast => (
              <div key={toast.id} className={`toast ${toast.name}`}>
                <div>{toast.message}</div>
                <div onClick={()=>closeHandler(toast.id)}>X</div>
              </div>
            ))
          }
        </div>
    </div>
  );
}

export default App;

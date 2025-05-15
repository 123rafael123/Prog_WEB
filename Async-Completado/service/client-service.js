const SUPABASE_URL = 'https://akmkhzbozqapilksaihl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrbWtoemJvenFhcGlsa3NhaWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NzY4NjAsImV4cCI6MjA2MjQ1Mjg2MH0.fx-E3QxLjHHsJpvsOpLSnhTv5bXAH-WEw5MSv3X4BJc';

const TABLE = 'clientes';
const API_URL = `${SUPABASE_URL}/rest/v1/${TABLE}`;

const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};

const listaclientes = () => {
    return fetch(`${API_URL}?select=*`, {
        headers: HEADERS
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Error al obtener la lista de clientes');
        }
        return res.json();
    });
};

const crearCliente = (nombre, email) => {
    const cliente = {
        nombre,
        email,
        id: uuid.v4()
    };
    return fetch(API_URL, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(cliente)
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al crear el cliente');
        }
        const text = await res.text();
        return text ? JSON.parse(text) : cliente;
    })
    .catch((error) => {
        console.error('Error en la creación del cliente:', error);
        throw error;
    });
};

const eliminarCliente = (id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        method: 'DELETE',
        headers: HEADERS
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al eliminar el cliente');
        }
        if (res.ok) {
            location.reload();
        }
        const text = await res.text();
        return text ? JSON.parse(text) : { id };
    })
    .catch((error) => {
        console.error('Error al eliminar el cliente:', error);
        throw error;
    });
};

const clientes = (id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        headers: HEADERS
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al obtener el cliente');
        }
        const text = await res.text();
        return text ? JSON.parse(text) : null;
    })
    .catch((error) => {
        console.error('Error al consultar el cliente:', error);
        throw error;
    });
};

const actualizarCliente = (nombre, email, id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
            ...HEADERS,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify({ nombre, email })
    })
    .then(async (res) => {
        if (!res.ok) {
            const error = await res.text();
            throw new Error(error || 'Error al actualizar el cliente');
        }
        const data = await res.json();
        return data[0];
    })
    .catch((error) => {
        console.error('Error en la actualización del cliente:', error);
        throw error;
    });
};

const buscarClientes = (campo, valor) => {
    if (!valor || valor.trim() === '') {
        return listaclientes();
    }
    
    return fetch(`${API_URL}?${campo}=ilike.%25${encodeURIComponent(valor)}%25&select=*`, {
        headers: HEADERS
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Error al buscar clientes');
        }
        return res.json();
    });
};

export const clientService = {
    listaclientes,
    crearCliente,
    eliminarCliente,
    clientes,
    actualizarCliente,
    buscarClientes
};

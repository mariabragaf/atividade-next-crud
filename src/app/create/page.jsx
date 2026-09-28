'use client';

import FormModal from '@/components/FormModal';
import { Button } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function CreatePage() {
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handSubmit = async (values) => {
        try {
            await axios.post('/api/series', values);
            setOpenModal(false);
            toast.success('Série criada!', { id: 'create'});
        } catch (error) {
            toast.error('Erro ao criar série.', { id: 'create'});
        } finally {
            setLoading(false)
        }
    };

    return (
        <main>
            <h2>Post - Create</h2>
            <p>
                O navegador envia o formulário (modal) para /api/series (nosso route.js); o servidor
                cria a série na API com a api-key privada.
            </p>
            <p>Abra o DevTools → Network → series → Payload: os dados enviados, sem x-api-key.</p>
            <Button type='primary' onClick={() => setOpenModal
                (true)}>
                    Nova série
                </Button>
        </main>
    )
}
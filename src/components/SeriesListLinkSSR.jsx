import SeriesList from '@components/SeriesListlinkSSR';
import axios from 'axios';
import Link from 'next/link';

export default async function Series() {
    let series = [];
    try {
        const response = await axios.get(`${process.env.API_URL_SERIES}?LIMIT=50`, {
            headers: {
                'x-api-key': process.env.API_KEY },
        });
        series = response.data;
        
    } catch (error) {
        console.error('Erro ao buscar séries:', error);
   
    }

    return (
        <ul>
            {series.map((item) => {
                <li key={item.id}>{item.title}</li>;
                <Link href={`/read/${item.id}`}> 
                {item.title}
                </Link>
            })};
        </ul>
    );
}
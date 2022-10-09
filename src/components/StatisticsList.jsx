import { Statistics } from './Statistics';

export const StatisticsList = ({ stats }) => {
    return (
        <ul>
            {stats.map( data => (
                <li key={data.id}>
                    <Statistics data={data}/>
                </li>
            ))}
        </ul>
    )
}
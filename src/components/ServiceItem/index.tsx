
import { Service } from '@/types/Service';
import './service_item.css';

interface ServiceItemProps {
    servcie: Service;
}

function ServiceItem({ servcie }: ServiceItemProps) {
    return (
        <section className="serviceitem__container">
            <div className="service">
                <h2>{servcie.title}</h2>
                <p>{servcie.description}</p>
            </div>
        </section>
    );
}

export { ServiceItem };

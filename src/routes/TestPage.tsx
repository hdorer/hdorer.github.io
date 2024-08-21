import Card from '../components/Card';
import thumbnail from '../assets/portrait.jpg';

function TestPage() {
    return (
        <div className="page-container">
            <div className="content-container">
                <Card title="Test Card" thumbnail={thumbnail}>
                    This is a card.
                </Card>
            </div>
        </div>
    )
}

export default TestPage;
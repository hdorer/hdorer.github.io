import Card from '../components/Card';
import thumbnail from '../assets/portrait.jpg';

function TestPage() {
    return (
        <>
            <Card title="Test Card" thumbnail={thumbnail}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p>

                <p>Sed elementum, velit ut efficitur volutpat, velit lectus commodo ligula, at sagittis massa ex vel sapien. Fusce laoreet, urna quis fermentum dapibus, felis nisi dignissim magna, a hendrerit arcu nunc sed libero. Nam a libero vel lorem luctus fermentum. Proin cursus orci id dignissim consequat. Nulla facilisi. Sed id neque nisl. Proin elementum ante id mi fringilla, non tincidunt neque auctor. Mauris blandit sem nec feugiat tristique. Praesent fermentum ante in sapien vulputate, vitae dictum elit suscipit. Suspendisse potenti. Quisque dictum quam sit amet orci hendrerit, non vehicula metus cursus.</p>

                <p>Nunc convallis ex vel nulla placerat, ac ullamcorper orci fermentum. Quisque in magna eu enim viverra tempor. Integer non lacus eget metus elementum facilisis. Sed at nisl et magna pellentesque consequat. Donec cursus diam at malesuada lacinia. Sed sit amet arcu sapien. Aenean ut enim ac leo tincidunt efficitur vel ac libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam volutpat libero quis massa elementum, at dapibus risus interdum. Pellentesque a neque eu augue faucibus viverra. Mauris et velit eros. Morbi lacinia dolor id ante tincidunt posuere. Nulla bibendum ligula non sollicitudin sodales. Fusce auctor, justo at suscipit tincidunt, libero lorem vulputate dolor, sit amet vulputate lectus urna sed velit. Curabitur ut ligula in arcu ultricies blandit nec in eros. Cras posuere lectus vitae augue dignissim luctus.</p>
            </Card>
        </>
    )
}

export default TestPage;
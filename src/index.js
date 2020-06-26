import helloWorld from './hello-world';
import addImage from './add-image';
import HelloWorldButton from './components/hello-world-button';

helloWorld();
addImage();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

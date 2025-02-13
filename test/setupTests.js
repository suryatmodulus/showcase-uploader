import dotenv from 'dotenv';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

dotenv.config({path: '.env.test'});

Enzyme.configure({adapter: new Adapter()});

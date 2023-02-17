import {storiesOf} from '@storybook/react';
import {Disclosure} from './disclosure';

storiesOf('shared/disclosure', module)
    .add('default', () => (
        <div>
            <Disclosure>
                <Disclosure.Container>
                    <Disclosure.Button>
                        Какой то текст
                    </Disclosure.Button>
                    <Disclosure.Panel>
                        Какой то текст Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus
                        dolore
                        esse
                        eum fugiat ipsam labore laboriosam molestiae molestias nobis, officia perspiciatis, possimus
                        voluptas.
                        Amet delectus eum impedit possimus soluta.
                    </Disclosure.Panel>
                </Disclosure.Container>
            </Disclosure>
            <Disclosure>
                <Disclosure.Container>
                    <Disclosure.Button>
                        Какой то текст
                    </Disclosure.Button>
                    <Disclosure.Panel>
                        Какой то текст Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus
                        dolore
                        esse
                        eum fugiat ipsam labore laboriosam molestiae molestias nobis, officia perspiciatis, possimus
                        voluptas.
                        Amet delectus eum impedit possimus soluta.
                    </Disclosure.Panel>
                </Disclosure.Container>
            </Disclosure>
            <Disclosure>
                <Disclosure.Container>
                    <Disclosure.Button>
                        Какой то текст
                    </Disclosure.Button>
                    <Disclosure.Panel>
                        Какой то текст Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus
                        dolore
                        esse
                        eum fugiat ipsam labore laboriosam molestiae molestias nobis, officia perspiciatis, possimus
                        voluptas.
                        Amet delectus eum impedit possimus soluta.
                    </Disclosure.Panel>
                </Disclosure.Container>
            </Disclosure>
        </div>
    ));

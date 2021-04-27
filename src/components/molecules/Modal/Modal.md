### Summary

`<Modal />` is a flexible dialog prompt wrapping [`react-modal`](http://reactcommunity.org/react-modal/) with some basic styles.

Props are passed down to `react-modal` so if you want to customize it, please refer to its documentation.

We enforce the use of the `<Card>` organism to keep the design consistency.

### Requisites 🗯

You should include `<Modal.Styles />` in you top-most level component, preferably like this:

```tsx static
import { Tooltip, GlobalStyles } from '@zopauk/react-components';

Modal.setAppElement('#app');

const App = () => (
  <>
    <Routes />
    <GlobalStyles />
    <Modal.Styles />
  </>
);
```

And call `Modal.setAppElement('#YOUR_ID');` before any modals are open.

### Tips 💄

- Control the CSS `z-index` value applied to the modal through the `zIndex` prop on `<Modal.Styles />`
- Supply `onRequestClose` to close the modal when the user clicks on its overlay ( see [`react-modal` docs](http://reactcommunity.org/react-modal/examples/on_request_close.html) )

### Examples

```tsx
import { Modal, Button, Card } from '@zopauk/react-components';

// Call Modal.setAppElement ONCE in the top level level component and pass it a query selector indentifiying the root of your app.
Modal.setAppElement('#rsg-root');

function ModalDemo() {
  const [isOpen, update] = React.useState(false);
  const toggleModal = () => update((prevState) => !prevState);

  return (
    <>
      <Button onClick={toggleModal} styling="link">
        Open default Modal
      </Button>
      <Modal isOpen={isOpen} onRequestClose={toggleModal}>
        <Card>
          <Card.Content>
            <Card.Heading>Title</Card.Heading>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Ab accusamus aperiam commodi, cupiditate dolore eaque enim harum id impedit iure laboriosam laudantium
            </Card.Text>
            <Card.Actions>
              <Button onClick={toggleModal} styling="secondary">
                Close Modal
              </Button>
              <Button onClick={toggleModal} styling="primary">
                Accept
              </Button>
            </Card.Actions>
          </Card.Content>
        </Card>
      </Modal>
    </>
  );
}

<>
  <Modal.Styles zIndex={100} />
  <ModalDemo />
</>;
```

```tsx
import { Modal, Button, Card, FlexRow, FlexCol, Icon } from '@zopauk/react-components';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// Call Modal.setAppElement ONCE in the top level level component and pass it a query selector indentifiying the root of your app.
Modal.setAppElement('#rsg-root');

function ModalDemo() {
  const [isOpen, update] = React.useState(false);
  const toggleModal = () => update((prevState) => !prevState);

  return (
    <>
      <Button onClick={toggleModal} styling="link">
        Open Modal alert with icon
      </Button>
      <Modal isOpen={isOpen} onRequestClose={toggleModal} hideBackground>
        <Card>
          <Card.Content>
            <FlexRow className="py-2">
              <FlexCol xs={2}>
                <Icon variant={faExclamationTriangle} color="orange" size="2x" />
              </FlexCol>
              <FlexCol xs={10}>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Card.Text>
              </FlexCol>
            </FlexRow>
          </Card.Content>
        </Card>
      </Modal>
    </>
  );
}

<>
  <Modal.Styles zIndex={100} />
  <ModalDemo />
</>;
```

```tsx
import { Modal, Button, Card, Icon, colors, FlexRow } from '@zopauk/react-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Call Modal.setAppElement ONCE in the top level level component and pass it a query selector indentifiying the root of your app.
Modal.setAppElement('#rsg-root');

function ModalDemo() {
  const [isOpen, update] = React.useState(false);
  const toggleModal = () => update((prevState) => !prevState);

  return (
    <>
      <Button onClick={toggleModal} styling="link">
        Open Modal big icon
      </Button>
      <Modal isOpen={isOpen} onRequestClose={toggleModal}>
        <Card>
          <Card.Content>
            <FlexRow justify="center" className="p-2">
              <Icon variant={faEnvelope} color={colors.brand} size="4x" />
            </FlexRow>
            <FlexRow justify="center" className="p-2">
              <Card.Heading>I am a title</Card.Heading>
            </FlexRow>
            <FlexRow justify="center" className="pb-4 px-4">
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Card.Text>
            </FlexRow>
            <Button onClick={toggleModal} styling="primary" fullwidth>
              Close Modal
            </Button>
          </Card.Content>
        </Card>
      </Modal>
    </>
  );
}

<>
  <Modal.Styles zIndex={100} />
  <ModalDemo />
</>;
```

### Summary

`<Modal />` is a flexible dialog prompt wrapping [`react-modal`](http://reactcommunity.org/react-modal/) with some basic styles.

Props are passed down to `react-modal` so if you want to customize it, please refer to its documentation.

#### Requisites ⚠️

- For the accessibility, call `Modal.setAppElement('#rootElementId')` in the root component before any of the modals are open.
- Include `<Modal.Styles>` component (preferably in a top-most level component)

#### Tips 💬

- Control the CSS `z-index` value applied to the modal through the `zIndex` prop on `<Modal.Styles />`
- Supply `onRequestClose` to close the modal when the user clicks on its overlay ( see [`react-modal` docs](http://reactcommunity.org/react-modal/examples/on_request_close.html) )

### Example

```jsx
import { Modal, Button, Heading } from '@zopauk/react-components';

// Call Modal.setAppElement ONCE in the top level level component and pass it a query selector indentifiying the root of your app.
Modal.setAppElement('#rsg-root');

function ModalDemo() {
  const [isOpen, update] = React.useState(false);
  const toggleModal = () => update(prevState => !prevState);

  return (
    <>
      <Button onClick={toggleModal} styling="link">
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onRequestClose={toggleModal}>
        <Heading as="h2">Title of the modal</Heading>
        <p>text of the modal</p>
        <Button onClick={toggleModal} styling="link">
          Close Modal
        </Button>
      </Modal>
    </>
  );
}

<>
  <Modal.Styles zIndex={100} />
  <ModalDemo />
</>;
```

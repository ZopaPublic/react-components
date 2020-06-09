### Summary

This is a wrapper around our standard [Modal](./#/Components/Molecules/Modal) ( _which in turn is just a wrapper of [React Modal](https://github.com/reactjs/react-modal)_ 🙃 ) with given copy and styles.

It should be used to warn the user the session is about to expire and give the options to either finish or extend it.

( _This is just an interface, it does not operate any actual user session_ )

### Example

```tsx
import { ExpiryModal, Modal, Button } from '@zopauk/react-components';

function ExpiryModalDemo() {
  const [isOpen, update] = React.useState(false);
  const toggleModal = () => update((prevState) => !prevState);

  const onEndSession = () => {
    window.alert('You are logged out!');
  };

  const onKeepSession = () => {
    window.alert('Your session is alive!');
  };

  return (
    <>
      <Button onClick={toggleModal} styling="link">
        Open Expiry Modal
      </Button>
      <ExpiryModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        onEndSession={onEndSession}
        onKeepSession={onKeepSession}
      />
    </>
  );
}

<>
  <Modal.Styles zIndex={100} />
  <ExpiryModalDemo />
</>;
```

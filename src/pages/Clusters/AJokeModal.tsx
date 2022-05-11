import { Modal, ModalProps } from '../Applications/Modal/Modal';

export type AJokeModalProps = {
  handleClose: () => void;
} & ModalProps;

export function AJokeModal({ isVisible, handleClose }: AJokeModalProps) {
  return (
    <Modal isVisible={isVisible}>
      <blockquote>
        "What do you call a fish wearing a bowtie?"
        <br />
        "Sofishticated."
        <footer>
          <cite>- Cool Joke Person</cite>
        </footer>
      </blockquote>
      <button onClick={handleClose}>Close</button>
    </Modal>
  );
}

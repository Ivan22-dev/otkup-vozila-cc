import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FirstSlide } from "./FirstSlide";
import ScrollButton from "../../utils/ScroolButton";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ScrollButton handleClickOpen={handleClickOpen} />
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Popuni prijavu za otkup</DialogTitle>
        <DialogContent style={{ height: "400px" }}>{page === 0 && <FirstSlide />}</DialogContent>
        <DialogActions>
          {page === 0 && <Button onClick={handleClose}>Odustani</Button>}
          {page !== 0 && <Button onClick={() => setPage(page - 1)}>Natrag</Button>}
          <Button onClick={() => setPage(page + 1)}>Nastavi</Button>
          <ScrollButton />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

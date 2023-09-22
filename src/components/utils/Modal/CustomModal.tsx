import React, { FC } from "react";
import { Modal, Box } from "@mui/material";

type Props = {
    open: boolean;
    setOpen: (value: boolean) => void;
    activeItem: any;
    component: any;
    setRoute?: (route: string) => void;
};

const CustomModal: FC<Props> = ({
    activeItem,
    component: Component,
    open,
    setOpen,
    setRoute,
}) => {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] h-[90%] md:w-[60%] md:h-[90%] max-w-[1200px] max-h-[1200px] bg-[#fff] dark:bg-slate-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4">
                <Component setOpen={setOpen} setRoute={setRoute} />
            </Box>
        </Modal>
    );
};

export default CustomModal;

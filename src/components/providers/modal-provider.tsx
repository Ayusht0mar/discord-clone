"use client"

import {CreateServerModal} from "@/components/modals/CreateServerModal"
import { useEffect, useState } from "react"
import InviteModal from "../modals/InviteModal";
import { EditServerModal } from "../modals/EditServerModal";
import MembersModal from "../modals/MembersModal";

export const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <InviteModal/>
            <CreateServerModal/>
            <EditServerModal/>
            <MembersModal/>
        </>
    )
}
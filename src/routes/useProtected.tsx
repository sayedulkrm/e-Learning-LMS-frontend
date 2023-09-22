import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

interface ProtectedProps {
    children: React.ReactNode;
    sendTo?: string;
    isAdmin?: boolean;
}

export default function ProtectedRoute({ children, sendTo }: ProtectedProps) {
    const { user } = useSelector((state: any) => state.auth);

    console.log("Im from Protected Route HAHA------", user);

    const isAuthenticated = user;

    return isAuthenticated ? children : redirect(sendTo ? sendTo : "/");
}

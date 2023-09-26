import Loader from "@/components/Loader/Loader";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

interface ProtectedProps {
    children: React.ReactNode;
    sendTo?: string;
    adminRoute?: boolean;
}

// 4:32:00 watch

export default function ProtectedRoute({
    children,
    sendTo,
    adminRoute,
}: ProtectedProps) {
    const { user } = useSelector((state: any) => state.auth);

    const { isLoading } = useLoadUserQuery(undefined, undefined);

    if (isLoading) return <Loader />;

    const isAuthenticated = user;

    const isAdmin = user?.role === "admin";

    if (adminRoute && !isAdmin) return redirect(sendTo ?? "/");

    return isAuthenticated ? children : redirect(sendTo ?? "/");
}

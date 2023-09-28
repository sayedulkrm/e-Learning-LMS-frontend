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

    if (isLoading) {
        return <Loader />;
    }

    const isAuthenticated = user;

    if (!isAuthenticated) {
        // User is not authenticated, redirect
        return redirect(sendTo ?? "/");
    }

    const isAdmin = user?.role === "admin";

    if (adminRoute && !isAdmin) return redirect(sendTo ?? "/");

    return children;
}

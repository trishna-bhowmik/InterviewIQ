"use client";

interface PageContainerProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function PageContainer({
  title,
  subtitle,
  children,
}: PageContainerProps) {
  return (
    <div className="space-y-8">

      {/* Page Header */}

      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-8 text-white shadow-xl">

        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 text-blue-100 text-lg">
            {subtitle}
          </p>
        )}

      </div>

      {/* Content */}

      <div className="rounded-3xl bg-white p-8 shadow-lg">

        {children}

      </div>

    </div>
  );
}
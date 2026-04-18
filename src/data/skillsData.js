const cdn = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

export const skillsData = {
  frontend: [
    { name: 'Next.js', icon: cdn('nextjs/nextjs-original.svg') },
    { name: 'React', icon: cdn('react/react-original.svg') },
    { name: 'React Native', icon: cdn('react/react-original.svg') },
    { name: 'Angular', icon: cdn('angular/angular-original.svg') },
    { name: 'TypeScript', icon: cdn('typescript/typescript-original.svg') },
    { name: 'JavaScript', icon: cdn('javascript/javascript-original.svg') },
    { name: 'Tailwind CSS', icon: cdn('tailwindcss/tailwindcss-original.svg') },
    { name: 'HTML', icon: cdn('html5/html5-original.svg') },
    { name: 'CSS', icon: cdn('css3/css3-original.svg') },
  ],
  mobile: [
    { name: 'Swift', icon: cdn('swift/swift-original.svg') },
    { name: 'SwiftUI', icon: cdn('swift/swift-original.svg') },
    { name: 'Expo', icon: cdn('expo/expo-original.svg') },
    { name: 'iOS & macOS', icon: cdn('apple/apple-original.svg') },
  ],
  backend: [
    { name: 'C#', icon: cdn('csharp/csharp-original.svg') },
    { name: 'ASP.NET Core', icon: cdn('dotnetcore/dotnetcore-original.svg') },
    { name: 'Python', icon: cdn('python/python-original.svg') },
    { name: 'Java', icon: cdn('java/java-original.svg') },
    { name: 'C++', icon: cdn('cplusplus/cplusplus-original.svg') },
    { name: 'Node.js', icon: cdn('nodejs/nodejs-original.svg') },
    { name: 'FastAPI', icon: cdn('fastapi/fastapi-original.svg') },
  ],
  databases: [
    { name: 'PostgreSQL', icon: cdn('postgresql/postgresql-original.svg') },
    { name: 'Supabase', icon: cdn('supabase/supabase-original.svg') },
    { name: 'SQL Server', icon: cdn('microsoftsqlserver/microsoftsqlserver-original.svg') },
    { name: 'SQL', icon: cdn('azuresqldatabase/azuresqldatabase-original.svg') },
  ],
  tools: [
    { name: 'Vercel', icon: cdn('vercel/vercel-original.svg') },
    { name: 'Azure', icon: cdn('azure/azure-original.svg') },
    { name: 'Git', icon: cdn('git/git-original.svg') },
    { name: 'Docker', icon: cdn('docker/docker-original.svg') },
    { name: 'Xcode', icon: cdn('xcode/xcode-original.svg') },
    { name: 'VS Code', icon: cdn('vscode/vscode-original.svg') },
    { name: 'Postman', icon: cdn('postman/postman-original.svg') },
  ],
};

export const useActiveRoute = () => {
  return () => {
    const route = useRoute();
    return route.name !== 'index___de' && route.name !== 'index___en' ? String(route.name).split('___')[0] : 'about';
  };
};

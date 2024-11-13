export const filterUsers = (users, searchTerm) => {
  if (!searchTerm) return users;

  const searchString = searchTerm.toLowerCase();

  return users.filter((user) => {
    if (!user) return false;

    return (
      user.name?.toLowerCase().includes(searchString) ||
      user.email?.toLowerCase().includes(searchString) ||
      user.username?.toLowerCase().includes(searchString) ||
      user.company?.bs?.toLowerCase().includes(searchString) ||
      user.website?.toLowerCase().includes(searchString)
    );
  });
};

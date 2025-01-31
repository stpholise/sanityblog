
export const useFormatDate = (dateString) => {
    const date = new Date(dateString); 
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }; 
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };
  
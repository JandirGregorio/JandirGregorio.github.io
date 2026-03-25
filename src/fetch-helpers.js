const FORMSPREE_URL = "https://formspree.io/f/mreqldnk";

export const sendContactInfo = async (formValues) => {
  try {
    const config = {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      }
    };

    const response = await fetch(FORMSPREE_URL, config);

    if (!response.ok) {
      throw Error(`Failed to submit. ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return { data, error: null };
  } catch (error) {
    console.warn(`Error: ${error}`);
    return { data: null, error };
  }
};

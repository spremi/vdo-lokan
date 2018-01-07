/**
 * Describes a user
 *
 * @property id         {string}  Identifier specific to user
 * @property firstName  {string}  First name of the user
 * @property lastName   {string}  last name of the user
 */
export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * Describes a password
 *
 * @property value      {string}  Password string
 */
export interface Password {
  value: string;
}

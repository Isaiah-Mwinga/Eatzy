"""create restaurants table

Revision ID: 6c384347985d
Revises: 3a8b338a4963
Create Date: 2023-06-10 12:25:54.009737

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6c384347985d'
down_revision = '3a8b338a4963'
branch_labels = None
depends_on = None


def upgrade() :
    op.create_table(
        'restaurants',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(50), nullable=False),
        sa.Column('address', sa.String(100), nullable=False),
        sa.Column('phone', sa.String(50), nullable=False),
        sa.Column('email', sa.String(50), nullable=False),
        sa.Column('description', sa.String(500), nullable=False),
        sa.Column('is_active', sa.Boolean, default=False),
        sa.Column('owner_id', sa.Integer, sa.ForeignKey('users.id')),
    )


def downgrade() :
    op.drop_table('restaurants')
